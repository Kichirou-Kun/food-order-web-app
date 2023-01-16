import FrontLayout from "@common/FrontLayout";
import Loading from "@components/Loading";
import { CloudArrowUpIcon, TrashIcon } from "@heroicons/react/24/solid";
import Button from "@ui/Button";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import IconButton from "@ui/IconButton";
import TextField from "@ui/TextField";
import Typography from "@ui/Typography";
import clsx from "clsx";
import NextImage from "next/image";
import React from "react";
import img from "../../../public/assets/hero/main_img.png";

const AddNewItemPage = () => {
  const [fields, setFields] = React.useState(false);
  const [alertStatus, setAlertStatus] = React.useState("danger");
  const [msg, setMsg] = React.useState(null);
  const [imageAsset, setImageAsset] = React.useState(null);
  return (
    <section className="flex min-h-screen w-full flex-row items-center justify-center">
      <Container>
        <div className="flex h-full flex-col items-center justify-center">
          <div className="w-full max-w-xl rounded bg-YELLOW p-4">
            {!fields && (
              <Typography
                className={clsx("text-center text-xl font-semibold", {
                  ["text-red-500"]: alertStatus === "danger",
                  ["text-green-500"]: alertStatus === "success",
                })}
              >
                Error
                {msg}
              </Typography>
            )}

            <Grid container className="mt-8 gap-4">
              <Grid item className="col-span-12">
                <TextField fullWidth placeholder="Give me a title..." />
              </Grid>
              <Grid item className="col-span-12">
                <select
                  className={clsx(
                    "text-SECONDARY_COLOR block w-full cursor-pointer rounded-md border border-gray-500 bg-inherit px-4  py-[16.5px] placeholder-slate-400 invalid:border-pink-500 invalid:text-pink-600 hover:ring-1 hover:ring-black focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:cursor-not-allowed disabled:text-gray-500 disabled:shadow-none disabled:hover:ring-0 dark:text-white dark:placeholder-slate-300 dark:hover:ring-white dark:disabled:text-gray-400"
                  )}
                >
                  <option>Burger</option>
                </select>
              </Grid>
              <Grid item className="col-span-12">
                <div className="flex h-[240px] cursor-pointer flex-col items-center justify-center border-2 border-dashed">
                  {imageAsset ? (
                    <Loading />
                  ) : (
                    <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center">
                      {imageAsset ? (
                        <>
                          <div className="flex flex-col items-center">
                            <CloudArrowUpIcon className="h-8 w-8 text-DARK_BLUE" />
                            <Typography className="text-gray-500">
                              Click here to upload
                            </Typography>
                          </div>
                          <input
                            type="file"
                            className="h-0 w-0"
                            accept="image/*"
                          />
                        </>
                      ) : (
                        <div className="relative h-full w-full">
                          <NextImage
                            src={img}
                            alt=""
                            className="h-full w-full object-contain"
                          />
                          <IconButton className="absolute top-0 right-0">
                            <TrashIcon className="h-6 w-6 text-red-400" />
                          </IconButton>
                        </div>
                      )}
                    </label>
                  )}
                </div>
              </Grid>
              <Grid item className="col-span-12">
                <TextField type="text" fullWidth placeholder="Calories" />
              </Grid>
              <Grid item className="col-span-12">
                <TextField type="text" fullWidth placeholder="Price" />
              </Grid>
              <Grid item className="col-span-12">
                <Button
                  fullWidth
                  size="large"
                  className="bg-DARK_BLUE text-white transition-all duration-150 ease-linear hover:opacity-90"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AddNewItemPage;

AddNewItemPage.getLayout = function getLayout(page: React.ReactElement) {
  return <FrontLayout>{page}</FrontLayout>;
};

import FrontLayout from "@common/FrontLayout";
import Button from "@ui/Button";
import Container from "@ui/Container";
import PasswordTextField from "@ui/PasswordTextField";
import TextField from "@ui/TextField";
import Typography from "@ui/Typography";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <section className="flex h-screen flex-col justify-center">
      <Container>
        <div className="mx-auto max-w-xl bg-white">
          <Typography
            variant="h4"
            className="py-8 text-center uppercase text-DARK_BLUE"
          >
            Register
          </Typography>
          <form>
            <div className="flex flex-col gap-4 p-6">
              <div className="flex flex-col">
                <Typography
                  variant="h5"
                  className="mb-1 capitalize text-DARK_BLUE"
                >
                  Email{" "}
                </Typography>
                <TextField fullWidth placeholder="Email" />
              </div>
              <div className="flex flex-col">
                <Typography
                  variant="h5"
                  className="mb-1 capitalize text-DARK_BLUE"
                >
                  Password{" "}
                </Typography>
                <PasswordTextField fullWidth placeholder="Password" />
              </div>
              <div className="flex flex-col">
                <Typography
                  variant="h5"
                  className="mb-1 capitalize text-DARK_BLUE"
                >
                  Confirm Password{" "}
                </Typography>
                <PasswordTextField fullWidth placeholder="Confirm Password" />
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  type="submit"
                  fullWidth
                  size="large"
                  className="bg-DARK_BLUE text-white duration-150 ease-linear hover:opacity-90"
                >
                  Create Account
                </Button>
                <Typography className=" text-gray-600">
                  <span className=" text-gray-600">
                    {"If you have account!"}{" "}
                  </span>
                  <Link href={"/signin"} className="text-MAIN_COLOR">
                    signin
                  </Link>
                </Typography>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default SignUpPage;

SignUpPage.getLayout = function getLayout(page: React.ReactElement[]) {
  return <FrontLayout>{page}</FrontLayout>;
};

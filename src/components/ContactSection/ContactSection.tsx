import SectionTitle from "@components/SectionTitle";
import Button from "@ui/Button";
import Container from "@ui/Container";
import TextAreaField from "@ui/TextAreaField";
import TextField from "@ui/TextField";
import Typography from "@ui/Typography";
import React from "react";

const ContactSection = () => {
  return (
    <section className="py-32" id="contact">
      <Container>
        <SectionTitle
          text="Maintain your dishes from everywhere"
          title="Contact"
        />
        <div className="mx-auto max-w-3xl rounded bg-white p-8">
          <form>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <Typography
                  variant="h5"
                  className="mb-1 capitalize text-DARK_BLUE"
                >
                  Name
                </Typography>
                <TextField fullWidth placeholder="Name" />
              </div>
              <div className="flex flex-col">
                <Typography
                  variant="h5"
                  className="mb-1 capitalize text-DARK_BLUE"
                >
                  Email
                </Typography>
                <TextField type={"email"} fullWidth placeholder="Email" />
              </div>
              <div className="flex flex-col">
                <Typography
                  variant="h5"
                  className="mb-1 capitalize text-DARK_BLUE"
                >
                  Phone
                </Typography>
                <TextField fullWidth placeholder="Phone" />
              </div>
              <div>
                <Typography
                  variant="h5"
                  className="mb-1 capitalize text-DARK_BLUE"
                >
                  Message
                </Typography>
                <TextAreaField fullWidth placeholder="Message" />
              </div>
              <Button
                size="large"
                className="bg-MAIN_COLOR text-white transition-opacity duration-150 ease-linear hover:opacity-90"
              >
                Submit Message
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;

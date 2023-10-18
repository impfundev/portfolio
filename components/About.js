import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function About() {
  return (
    <div className="flex flex-col items-center px-12">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-8 md:gap-16 items-start justify-between">
            <div className="h-72 md:h-80 lg:h-[500px] col-span-6 md:col-span-4 rounded-2xl overflow-hidden">
              <Image
                isZoomed
                loading="lazy"
                className="w-full"
                alt="profile cover"
                src="profile.jpg"
                width={2048}
                height={3072}
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="prose lg:prose-xl">
                  <h1 className="text-foreground">About</h1>
                  <h3 className="font-semibold text-foreground/90">
                    Ilham Maulana Pratama
                  </h3>
                  <small className="text-foreground/80">
                    mail@ilhammaulana.me
                  </small>
                  <p className="text-foreground/80">Full-Stack Developer</p>
                  <p className="text-foreground/80">
                    I am a web developer with in building full-stack web
                    applications using React and Next.js Framework. I have a
                    passion for creating responsive, user-friendly and
                    aesthetically pleasing websites that meet the client’s needs
                    and expectations.
                  </p>
                  <p className="text-foreground/80">
                    I enjoy collaborating with designers who have a high taste
                    of design and learning new technologies and tools to improve
                    my web development skills.
                  </p>
                  <div className="flex gap-4 items-center flex-wrap">
                    <Button
                      className="rounded-full"
                      variant="shadow"
                      color="primary"
                      as={Link}
                      href="https://www.linkedin.com/in/ilhammp/"
                    >
                      Linkedin
                    </Button>
                    <Button
                      className="rounded-full"
                      variant="shadow"
                      color="primary"
                      as={Link}
                      href="https://github.com/impfundev"
                    >
                      Github
                    </Button>
                    <Button
                      className="rounded-full"
                      variant="shadow"
                      color="primary"
                      as={Link}
                      href="mailto:mail@ilhammaulana.me"
                    >
                      Email
                    </Button>
                    <Button
                      className="rounded-full"
                      variant="shadow"
                      color="primary"
                      as={Link}
                      href="https://read.cv/ilhammaulana.p"
                    >
                      CV
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

"use client";

import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import ModalProject from "./ModalProject";

export default function CardProject({ title, excerpt, image, content }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Card isFooterBlurred className="w-full h-[300px] max-w-sm rounded-2xl">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">New</p>
          <h4 className="text-white/90 font-medium text-xl">{title}</h4>
        </CardHeader>
        {image && (
          <Image
            onClick={onOpen}
            isZoomed
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src={image}
          />
        )}
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-base text-white/80 font-semibold tracking-wide">
                {title}
              </p>
              <p className="text-tiny text-white/60">{excerpt}</p>
            </div>
          </div>
          <Button onPress={onOpen} radius="full" size="sm">
            See Fast
          </Button>
        </CardFooter>
      </Card>
      <ModalProject
        image={image}
        title={title}
        content={content}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
}

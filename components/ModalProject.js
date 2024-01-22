import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
} from "@nextui-org/react";

export default function ModalProject({
  title,
  content,
  image,
  isOpen,
  onOpenChange,
}) {
  return (
    <Modal
      className="prose lg:prose-xl dark:prose-invert text-foreground max-h-[90vh] overflow-y-auto"
      size="4xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h1>{title}</h1>
              <Image
                alt="Relaxing app background"
                className="w-full max-h-[380px] object-cover"
                width={1080}
                height={720}
                src={image}
              />
            </ModalHeader>
            <ModalBody dangerouslySetInnerHTML={{ __html: content }} />
            <ModalFooter>
              <Button color="primary" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

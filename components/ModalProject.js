import IconClose from "./icon/IconClose";
import Image from "next/image";

export default function ModalProject() {
  return (
    <>
      <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50">
        <div className="relative px-20 py-10 w-[85vw] h-[85vh] overflow-y-auto bg-gray-300 rounded-2xl hide-scroll-bar">
          <div className="prose lg:prose-xl container mx-auto">
            <div className="flex justify-between items-center">
              <h1>Project 1</h1>
              <span className="text-sm">Scroll down to continue</span>
            </div>
            <Image
              className="w-full h-auto rounded-2xl"
              src="/thumbnail-ex.png"
              width={1500}
              height={1000}
            />
            <p>
              Turpis donec consequat nibh phasellus porta adipiscing. Nibh
              sollicitudin consequat mauris scelerisque id consectetur viverra
              dictumst arcu himenaeos rhoncus ad? Volutpat pretium consectetur
              tristique cras placerat, penatibus mattis conubia dictum. Turpis
              ad nostra montes! Pulvinar malesuada; massa sodales magnis
              himenaeos pulvinar natoque proin quisque vulputate dis! Fusce
              fringilla iaculis bibendum, sit montes. Ornare; ut volutpat nisl.
              Fusce odio adipiscing
            </p>
            <p>
              est ultrices malesuada eget id hendrerit quisque elit. Malesuada
              blandit interdum congue viverra scelerisque taciti sodales ut.
              Pretium viverra dolor platea ad nam semper, magnis ac. Purus
              placerat sapien bibendum platea erat facilisi ligula feugiat leo?
              Nullam sed taciti, magnis ac inceptos dignissim diam per?
              Consequat adipiscing sociis massa. Mi eu ut senectus inceptos nibh
              malesuada curabitur. Dictum turpis primis consectetur. Tellus
              bibendum, ullamcorper mauris. Praesent mauris taciti vestibulum.
              Quam dui cras bibendum magnis hac maecenas et lectus dictumst. Dis
              massa, vitae venenatis a. Faucibus
            </p>
            <p>
              quam suscipit potenti donec? Massa blandit elit rhoncus litora
              elit class sociis leo class. Dictumst sociosqu sem elementum
              ultricies iaculis placerat dapibus facilisis adipiscing. Velit
              odio tristique vel orci sociis turpis pretium. Ridiculus diam nisi
              habitant. Sem arcu ridiculus dolor dis ridiculus nisl dolor id
              tortor. Vitae scelerisque mauris feugiat conubia ridiculus odio
              dolor arcu fringilla montes id. Ante dignissim eleifend praesent
              orci. Venenatis mus orci aliquet blandit libero mus etiam. Netus
              class inceptos taciti porttitor; nam volutpat dui montes commodo
              maecenas amet varius. Etiam rhoncus etiam aliquet porta felis
              mattis erat ridiculus, dui quam. Euismod amet eros rutrum mollis
              cursus, nullam iaculis suscipit. Mus vitae consequat
            </p>
            <p>
              nullam duis sagittis tortor gravida sem suscipit! Suspendisse!
              Ridiculus natoque diam facilisis ad dolor morbi per netus aenean.
              Ullamcorper adipiscing commodo donec etiam nisi class. Nisi primis
              senectus eu id. Orci consequat himenaeos nam himenaeos. Aliquet
              laoreet mattis litora rutrum ligula. Maecenas tortor himenaeos
              ridiculus. A scelerisque quis curae; pellentesque vulputate
              habitant mus ultricies faucibus nisi nascetur. Justo dolor
              nascetur nisl ultrices, venenatis porttitor iaculis dictumst.
              Primis ullamcorper vehicula hac donec euismod senectus malesuada
              himenaeos. Vel.
            </p>
          </div>
          <button className="absolute top-10 right-10 p-2 rounded-full bg-black text-white">
            <IconClose className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="fixed top-0 w-screen h-screen bg-black/50 z-40"></div>
    </>
  );
}

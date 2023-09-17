import DocsNav3 from "./DocsNav3";

// const docsLinks = [
//   {
//     title: "Getting Started",
//     links: [{ name: "Token", url: "/docstoken" }],
//   },
//   {
//     title: "Endpoints",
//     links: [
//       {
//         name: "Address",
//         url: "docsaddress",
//         links: [{ name: "Country", url: "/docsaddresscountry" }],
//       },
//     ],
//   },
// ];

interface Props {
    children: any
}

const Docs = ({ children }: Props) => {
    return (
        // <div className="flex flex-col md:flex-row h-full mt-[100px] mb-[300px] xl:mx-[60px]">
        //   <div
        //     className="
        //       flex 
        //       flex-col
        //       justify-center
        //       gap-y-2 
        //       h-full 
        //       md:w-[300px] 
        //       p-2
        //       md:border-r-[2px]
        //       border-neutral-400
        //     "
        //   >
        //     <DocsNav2 />
        //     {/* {docsLinks.map((item) => (
        //       <DocLinks title={item.title} links={item.links} key={item.title} />
        //     ))} */}
        //   </div>
        //   <main className="h-full flex-1 p-2">{children}</main>
        // </div>
        <div className="images pt-50 pb-50">
            <div className="container">
                <div className="row justify-content-center">
                    <DocsNav3 />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Docs;

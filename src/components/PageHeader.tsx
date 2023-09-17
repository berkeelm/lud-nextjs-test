import React from "react";

interface Props {
    title: string;
    desc: string;
}

const PageHeader = ({ title, desc }: Props) => {
    return (
        // <div className="top-0 pt-[180px] w-full h-[50px] bg- bg-center flex justify-center items-center">
        //   <div className="flex flex-col gap-8 justify-center items-center">
        //     <h2 className="font-bold text-4xl">{title}</h2>
        //     {/* <p>{desc}</p> */}
        //     <nav className="flex gap-2 items-center justify-center">
        //       <h3
        //         className="text-md cursor-pointer hover:underline decoration-rose-700"
        //         onClick={() => router.push("/")}
        //       >
        //         Home
        //       </h3>
        //       <AiOutlineRight />
        //       <h3 className="font-bold text-md text-rose-700">{title}</h3>
        //     </nav>
        //   </div>
        // </div>

        <section className="bg-half-125 d-table w-100 bg-light" /*style={{ background: "url('/images/bg/Breadcrumb.png') top center" }}*/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-heading text-center text-md-center">
                            <h2>{title}</h2>
                            <p className="mt-3 mb-0">{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;

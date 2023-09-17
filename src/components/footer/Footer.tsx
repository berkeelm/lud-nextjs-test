import map from '../../assets/images/bg/map.png'

const Footer = () => {

    return (
        // <footer
        //   className="relative bg-cover bg-rose-200/50 h-[900px] md:h-[600px] flex flex-col items-center"
        //   style={{ backgroundImage: 'url("/images/bg/map.png")' }}
        // >
        //   {/* SUBSCRİBE INPUT */}
        //   {/* <div
        //     className="absolute flex top-0 w-[660px] h-[160px] translate-y-[-50%] bg-rose-700/70 p-10 rounded-md"
        //     // style={{ backgroundImage: 'url("/images/bg/newsletter-bg.jpg")' }}
        //   >
        //     <form className="flex w-full">
        //       <div className="flex p-2 w-full bg-white rounded-md">
        //         <input
        //           className="border-none w-full outline-none "
        //           type="text"
        //           placeholder="Enter email Address"
        //         />
        //         <button
        //           className="px-8 text-white font-semibold bg-rose-700 rounded-md text-center"
        //           type="submit"
        //         >
        //           Subscribe
        //         </button>
        //       </div>
        //     </form>
        //   </div> */}
        //   <div className="flex flex-col items-center justify-between mt-[96px]">
        //     <h1 className="text-4xl lg:text-6xl font-bold text-rose-700">
        //       LookUpDatas
        //     </h1>
        //   </div>
        //   {/* <div className="flex items-center justify-center gap-6 mt-[40px]">
        //     <SocialIcon
        //       icon={<FaLinkedinIn className="group-hover:text-white" size={16} />}
        //       link="https://www.linkedin.com/company/look-up-datas/"
        //     />
        //     <SocialIcon
        //       icon={<FaTwitter className="group-hover:text-white" size={16} />}
        //       link="https://twitter.com/lookupdatas"
        //     />
        //     <SocialIcon
        //       icon={<FaYoutube className="group-hover:text-white" size={16} />}
        //       link="https://www.youtube.com/channel/UCOzFUbwjfps3WUx5SXz54Pg"
        //     />
        //     <SocialIcon
        //       icon={<FaGithub className="group-hover:text-white" size={16} />}
        //       link="https://github.com/lookupdatas"
        //     />
        //   </div> */}
        //   <FooterNav />
        // </footer>

        <footer className="footer-area" style={{ backgroundImage: `url(${map.src})` }}>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-6 col-12 col-center">
                        <h1 className="footer-logo">Look Up Datas</h1>
                    </div>
                </div>
                <div className="col-md-4 col-12 foot-divider col-center"></div>
                <ul className="social-link">
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/look-up-datas/"><i className="ri-linkedin-box-fill"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/lookupdatas"><i className="ri-twitter-line"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCOzFUbwjfps3WUx5SXz54Pg"><i className="ri-youtube-line"></i></a></li>
                </ul>
                <p className="copyright-text ">&copy; 2023 <a href="https://lookupdatas.com/"><b>Look Up Datas</b></a>. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
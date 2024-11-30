import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-transparent text-cyan-400 py-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                {/* Left Section: Logo */}
                <div className="flex items-center mb-4 md:mb-0">
                    <Image
                        src="/images/[removal.ai]_0d93b1ac-7ec9-474b-bd8f-be0378c817e9-logo_formed.png" 
                        alt="Logo"
                        width={100}
                        height={50}
                        className="mr-3"
                    />
                    <span className="text-xl font-bold">Formed Quality</span>
                </div>

                {/* Right Section: Contact Information */}
                <div className="text-center md:text-right">
                    <p className="text-sm">Contact Us:</p>
                    <p className="text-sm">Email: support@formedquality.com</p>
                    <p className="text-sm">Phone: +123 456 7890</p>
                </div>
            </div>

            {/* Bottom Section: All Rights Reserved */}
            <div className="text-center mt-4 text-sm border-t border-cyan-500 pt-4">
                © {new Date().getFullYear()} Formed Quality. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
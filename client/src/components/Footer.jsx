import logo from '../../images/logo.png';
import githubLogo from '../../images/github.png'

const Footer = ()=>{
    return (
        <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
            <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4 '>
                <div className='flex flex-[0.5] justify-center items-center'>
                    <img src={logo} alt='logo' className='w-32'></img>
                </div>
                <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full '>
                    <p className='text-white text-base text-center mx-2 cursor-pointer hover:text-regal-blue'>Market </p>
                    <p className='text-white text-base text-center mx-2 cursor-pointer hover:text-regal-blue'>Exchange </p>
                    <p className='text-white text-base text-center mx-2 cursor-pointer hover:text-regal-blue'>Tutorials </p>
                    <p className='text-white text-base text-center mx-2 cursor-pointer hover:text-regal-blue'>Wallets </p>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col mt-5'>
                <p className='text-white text-sm text-center hover:scale-110 duration-300 hover:text-blue-400'>a.mortezaie98@gmail.com</p>
            </div>
            <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5'/> 
            <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
                <a href='https://github.com/aminmortezaie' className='flex flex-row hover:-translate-y-1 hover:bg-gradient-to-r from-edited-black to-edited-red rounded-full  duration-300'>
                    <img src={githubLogo} alt='github' className='w-12 brightness-50  contrast-50 hover:scale-110 duration-300' />
                    <p className='text-white text-md text-center p-3'>
                    Amin Mortezaie
                </p>
                </a> 

            <p className='text-white text-md text-center'>@All rights reserved</p>
            </div>
        </div>
    );

}

export default Footer;

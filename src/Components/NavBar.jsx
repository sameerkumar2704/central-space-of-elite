import logo from'../assets/logo.png'
function NavBar(){
    return (
        <nav className=' h-[10vh]  py-4 px-11 flex justify-between items-center'>
            <img src={logo}/>
            <ul className=' flex gap-10 text-white text-xl cursor-pointer'>
                <li className=' hover:text-orange-500 hover:underline hover:decoration-orange-500 underline-offset-4'>Home</li>
                <li>Webinar</li>
                <li>Mentess</li>
                <li>Our Team</li>
            </ul>
        </nav>
    )
}
export default NavBar;

import './Heading.css'

const Heading = () => {
    return(
        <header className="heading bg-cyan-900 text-orange-100 flex mt-10 place-content-around p-3 border-red-200 border-12 rounded-full shadow-inner shadow-zinc-100 ">
            <img className="rounded-full w-auto h-28" src="./src/svg/profile.png" alt="profile" ></img>
            <section className="block text-center">
                <h1 className="">Abhisek Bharti</h1>
                <h3 className="">Full stack Developer</h3>
                <p className="Description">I'm fulls stack developer with computer science</p>
                <p className='project'>Here fetch total project, i have done 20+ project </p>
            </section>
        </header>

        
    )
}


export default Heading;
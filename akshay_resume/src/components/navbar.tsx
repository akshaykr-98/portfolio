import Link from 'next/link'

export default function Navbar(){
    return(
        <div className="navbar">
            {/* <nav> */}
            <Link href="#">Home</Link>
            <Link href="#footer">Contacts</Link>
            <Link href="#card">Projects</Link>
            <Link href="/addProject">Add Project</Link>
            {/* </nav> */}
        </div>
    )
}
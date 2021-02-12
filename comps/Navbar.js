import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/dino-logo.png" height={100} width={100} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/friends"><a>Friend Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;
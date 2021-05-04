import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Client1() {
    const router = useRouter()
    return <div>
      <div>Client1</div>
      <Link href="/client/client2">
          <a>Home</a>
        </Link>
        <button onClick={() => router.push("/client/client2")}>Route</button>
    </div>
  }
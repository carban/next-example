import Link from "next/link";

export default function ServiceCard({ service }: { service: { name: string, desc: string, icon: any, path: string } }) {
    return <div className="p-6 border rounded-lg shadow bg-gray-800 border-gray-800">
        <div className="inline-flex">
            {service.icon}
            <Link href={service.path} className="px-1">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">{service.name}</h5>
            </Link>
        </div>
        {
            service.desc ? <p className="mb-3 font-normal text-gray-400">{service.desc}</p> : false
        }
    </div>
}
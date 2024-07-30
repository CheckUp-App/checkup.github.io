import { Checkbox } from "@headlessui/react"
import Checkboxx from "./Checkbox"

const gbmposts = [
  {
    id: 1,
    title: 'Follow Up',
    href: '#',
    location:
      'Houston Baptist Hospital',
    date: 'Apr 3, 2024',
    category: { title: 'Aetna', href: '#' },
    slideImg: 'https://i.imgur.com/N3XPTPW.png',
  },
  {
    id: 1,
    title: 'Initial Evaluation',
    href: '#',
    location:
      'Houston Baptist Hospital',
    date: 'Jan 10, 2023',
    category: { title: 'United Healthcare', href: '#' },
    slideImg: 'https://i.imgur.com/YuivKzK.png',
  },
  // More posts...
]

const headercss = 'text-3xl subheaderstyle text-gray-900 sm:text-4xl pb-6 border-b-2 border-blue-800'

export default function PastAppointments() {
  return (

    <div className="purple-bg py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className={headercss}>Past Appointments</h2>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-2 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {gbmposts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="relative w-full items-center gap-y-5 lg:flex my-4 ">
                  <img className="transition-all hover:scale-105 duration-300 ease-out rounded-2xl w-full h-auto"src={post.slideImg} alt="" />
              </div>
              <div className="flex items-center gap-x-4 text-md">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                  {post.category.title}
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-2xl font-bold leading-6 text-gray-900">
                    <span className="absolute inset-0" />
                    {post.title}
                </h3>
                <h4 className="mt-1 text-md leading-6 text-gray-900">
                    <span className="absolute inset-0" />
                    {post.location}
                </h4>
                <div className="mt-3 flex flex-row justify-left">
                    <div className="flex">
                        <p>Insurance Coverage</p>
                        <Checkboxx />
                    </div>
                    <div className="flex">
                        <p>Co-Pay</p>
                        <Checkboxx />
                    </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

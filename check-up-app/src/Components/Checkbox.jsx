import { Checkbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

export default function Checkboxx() {
  const [enabled, setEnabled] = useState(true)

  return (
    <Checkbox
      checked={enabled}
      onChange={setEnabled}
      className="group size-6 rounded-md bg-white/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-white"
    >
      <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
    </Checkbox>
  )
}

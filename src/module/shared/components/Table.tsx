'use client'

import { MouseEventHandler, useState } from "react"
import { useClientContext } from "../../clients/context"

export default function Table() {
  const { clients } = useClientContext()
  const keys = Object.keys(clients[0])
  const keysStatus = keys.reduce<Record<string, boolean>>((acc, key) => acc = { ...acc, [key]: true }, {})
  const [ShowStatusKeys, setKeysToHide] = useState<typeof keysStatus>(keysStatus)
  const hideKey: MouseEventHandler<HTMLTableHeaderCellElement> = ({ currentTarget: { textContent } }) => {
    const text = textContent as string
    setKeysToHide(state => ({ ...state, [text]: !state[text] }))
  }

  return (
    <table style={{ width: '100%' }} >
      <thead>
        <tr>
          {keys
            .filter(key => ShowStatusKeys[key])
            .map(key => (
              <th key={key} onClick={hideKey} >{key}</th>
            ))}
        </tr>
      </thead>

      <tbody>
        {clients
        .map(client => (
          <tr key={client.id}>
            {keys
              .filter(key => ShowStatusKeys[key])
              .map(key => (<th key={key} >{client[key]}</th>))
            }
          </tr>
        ))}

      </tbody>
    </table>
  )
}
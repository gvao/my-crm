'use client'

import { useClientContext } from "../context"

export default function Table() {
    const { clients, keys } = useClientContext()
    return (
      <table style={{ width: '100%' }} >
        <thead>
          <tr>
            {keys.map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
  
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              {keys.map(key => (<th key={key} >{client[key]}</th>))}
            </tr>
          ))}
  
        </tbody>
      </table>
    )
  }
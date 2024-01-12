import { vi } from 'vitest'
import { fireEvent, render } from '../../tests/utils'

import { Button } from './Button'

describe('Button', () => {
  const clickHandler = vi.fn()
  it('should text in button', () => {
    const { getByRole } = render(
      <Button text="Some text in my button" onClick={clickHandler} />
    )
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
  })
  it('should trigger onClick event', () => {
    const { getByRole } = render(
      <Button text="Some text in my button" onClick={clickHandler} />
    )
    const button = getByRole('button')
    fireEvent.click(button)
    expect(clickHandler).toHaveBeenCalledTimes(1)
  })
})

import Link from 'next/link'

export default function CustomLink ({
  as,
  href,
  ...otherProps
}: {
 as?: string
 href: string
 [key: string]: any
}) {
  return (
  <Link as={as} href={href}>
   <a {...otherProps} />
  </Link>
  )
}

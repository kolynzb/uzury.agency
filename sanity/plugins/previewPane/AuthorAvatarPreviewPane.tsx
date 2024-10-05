import { Card, Flex } from '@sanity/ui'
import AuthorAvatar from '../../components/AuthorAvatar'
import type { IAuthor } from '@/interfaces/sanity.interface'

export default function AuthorAvatarPreviewPane(props: IAuthor) {
  const { name, image } = props
  return (
    <Card padding={6}>
      <Flex justify="center">
        <AuthorAvatar name={name || 'Untitled'} picture={image} />
      </Flex>
    </Card>
  )
}

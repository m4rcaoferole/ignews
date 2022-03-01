import { signIn, useSession } from 'next-auth/react'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps ) => {
  const { data: session } = useSession();
  
  const handleSubscribe = () => {
    if (!session) {
      signIn()
      return;
    }


  }

  return (
    <button
      className={styles.subscribeButton}
      type="button"
      onClick={() => handleSubscribe()}
    >
      Subscribe now
    </button>
  )
}

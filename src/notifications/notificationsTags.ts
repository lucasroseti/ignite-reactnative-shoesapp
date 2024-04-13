import { OneSignal } from 'react-native-onesignal'

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: 'Lucas',
    user_email: 'lc.roseti@gmail'
  })
}

export function tagUserEmailRemove() {
  OneSignal.User.removeTag('user_email')
}

export function tagCartUpdate(itemsCount: string) {
  OneSignal.User.addTag('cart_items_count', itemsCount)
}
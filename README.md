# Vue3 toast

> This plugins is compatible with  [tailwindcss 2]("https://tailwindcss.com/") et [fontawesome](https://fontawesome.com/) (exept for custom notification cell)

## Add it to your project

Install it with yarn or NPM

```shell
yarn add @kugatsu/vue-toast
```

## How to use

### Install the plugin into

```javascript
// main.js

import VueNotification from "@kugatsu/vue3-toast";

createApp(App)
  .use(VueNotification, { duration: 5000, [...] })
```

### Add the container at the bottom of your App

```vue
// App.vue

<template>
  <div>
    <router-view />
    <VueNotificationContainer />
  </div>
</template>
```

### Throw toast

```javascript
// param1: notification
// param2: custom timeout
this.$toast.new({
  title: "Password",
  icon: "key",
  content: "Email send",
}, 10000);

this.$toast.success({
  title: "Password",
  icon: "key",
  content: "Email send",
});

this.$toast.error({
  title: "Password",
  icon: "key",
  content: "Email send",
});

this.$toast.warning({
  title: "Password",
  icon: "key",
  content: "Email send",
});
```

### Composition api

```javascript
import useToast from "@kugatsu/vue3-toast/useToast";

[...]

setup(){
    const toast = useToast();

    toast.new({
        title: "Acquittement Réparateur",
        content: "L'intervention a été acquitté",
        icon: "check-circle"
    });
}

```

## Configuration

This is the default configuration of the toast. You can overide some property during the installation.

```javascript
let conf = {
  duration: 5000,
  position: "top-right",
  fullSize: false,
  fullSizeMobile: true,
  colors: {
    new: "bg-blue-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  },
};

createApp(App).use(VueNotification, { conf });
```

## Customization

If you want replace the layout of the notification you can pass as props **cellComponent** a vue3 component with "notification" props. 

You can do the same things to replace animation groups with the props 
**transitionComponent**

Sample: 
````html
<template>
  <div>
    <router-view />
    <VueNotificationContainer :cellComponent="YourCustomCell" :transitionComponent="YourTransition"/>
  </div>
</template>
````

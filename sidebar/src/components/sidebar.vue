<template>
  <div id="demo" :class="{'collapsed' : collapsed}">
    <sidebar-menu :menu="menu" :collapsed="collapsed" @collapse="onCollapse" />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'Main Navigation',
        },
        {
          href: '/',
          title: 'Profile',
          icon: 'fa fa-user'
        },
        {
          header: true,
          title: 'API',
        },
        {
          title: 'API',
          icon: 'fas fa-tape',
          child: [
            {
              href: '/googleSource',
              title: 'Google Source',
              icon: 'fab fa-google',
            },
            {
              href: '/facebookSource',
              title: 'Facebook Source',
              icon: 'fab fa-facebook-f',
            },
            {
              href: '/internalSource',
              title: 'Internal Source',
              icon: 'far fa-square'
            },
          ]
        },
        {
          header: true,
          title: 'Other',
        },
        {
          title: 'Users',
          icon: 'fas fa-users',
          child: [
            {
              href: '/auth/login',
              title: 'Login Page',
              icon: 'fas fa-sign-in-alt',
            },
            {
              href: '/auth/registration',
              title: 'Registration Page',
              icon: 'fas fa-registered'
            },
            {
              href: '#',
              title: '404 Page',
              icon: 'fas fa-exclamation-triangle'
            },
          ]
        },
        {
          href: '#',
          title: 'Sign-Ups',
          icon: 'fas fa-user-plus'
        },
        {
          href: '#',
          title: 'Ad Revenue',
          icon: 'fas fa-dollar-sign'
        },
        {
          href: '#',
          title: 'Active Users',
          icon: 'fas fa-user-check'
        },
        {
          href: '#',
          title: 'Page Views',
          icon: 'fas fa-file'
        },
        {
          title: 'Multiple Level',
          icon: 'fa fa-list-alt',
          child: [
            {
              href: '#',
              title: 'Page 01',
            },
            {
              title: 'Page 02',
              child: [
                {
                  href: '#',
                  title: 'Page 04',
                },
                {
                  href: '#',
                  title: 'Page 05',
                }
              ]
            },
            {
              href: '#',
              title: 'Page 03'
            },
            {
              title: 'Level 2',
              child: [
                {
                  href: '#',
                  title: 'Level 3',
                  child: [
                    {
                      href: '#',
                      title: 'Page',
                    },
                    {
                      href: '#',
                      title: 'Page',
                    }
                  ]
                },
              ]
            },
          ]
        },
      ],
      collapsed: false
    }
  },
  methods: {
    onCollapse(val) {
      console.log(`collapsed ${val}`)
      this.collapsed = val
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
body,html {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
}
#demo {
  padding-left: 350px;
}
#demo.collapsed {
  padding-left: 50px;
}
</style>

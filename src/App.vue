<template>
    <div class="main" :class="{ 'isDisconnected': user == null }">
        <title-bar class="titlebar" :class="{ 'isDisconnected': user == null }"></title-bar>
        <router-view class="view" :class="{ 'view--hidden': submenu != false }"></router-view>
        <menu-bar class="menubar" :class="{ 'isDisconnected': user == null }"></menu-bar>
    </div>
</template>

<script type="text/babel">
    import TitleBar from 'components/TitleBar'
    import MenuBar from 'components/MenuBar'

    export default {
        replace: false,
        components: {
            TitleBar,
            MenuBar,
        },
        data() {
            return {
                user: this.$select('user'),
                submenu: this.$select('submenu'),
            }
        },
    }
</script>

<style scoped>

    .main {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 32px 0 72px 0;
        max-width: 1400px;
        width: 100%;
    }

    .main.isDisconnected {
        padding-bottom: 0;
    }

    @media (min-width: 500px) {
        .main {
            padding: 47px 7px 72px 7px;
        }
    }

    @media (min-width: 900px) {
        .main {
            padding: 67px 5px 0 255px;
        }

        .main.isDisconnected {
            padding: 67px 7px 0 7px;
        }
    }

    .titlebar {
        background-color: #4db788;
        border-bottom: 2px solid #49996f;
        box-sizing: border-box;
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        left: 0;
        position: fixed;
        text-align: center;
        top: 0;
        right: 0;
        z-index: 3;
    }

    @media (min-width: 900px) {
        .titlebar {
            height: 50px;
            line-height: 80px;
        }

        .titlebar.isDisconnected {
            left: 0;
        }
    }

    .view {
        position: relative;
    }

    @supports (pointer-events: none) {

        .view:after {
            background-color: #fff;
            content: '';
            display: block;
            height: 100%;
            left: 0;
            position: absolute;
            opacity: 0;
            top: 0;
            transition: 150ms opacity ease-in-out;
            width: 100%;
            pointer-events: none;
        }

        .view.view--hidden:after {
            opacity: 0.8;
            pointer-events: auto;
        }
    }

    @media (min-width: 900px) {
        .view:after {
            display: none;
        }
    }

    .menubar {
        border-top-style: solid;
        border-top-width: 2px;
        bottom: -1px;
        height: 41px;
        left: 0;
        position: fixed;
        width: 100%;
        z-index: 2;
    }

    .menubar.isDisconnected {
        display: none;
    }

    @media (min-height: 550px) {
        .menubar {
            height: 71px;
        }
    }

    @media (min-width: 900px) {
        .menubar {
            border-top-style: none;
            border-top-width: 0;
            flex-direction: column;
            height: auto;
            top: 67px;
            width: 250px;
        }
    }

</style>

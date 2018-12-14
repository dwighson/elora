<template>
    <div class="contact">
        <input type="text" placeholder="Name">
        <input type="text" placeholder="Company Name">
        <input type="text" placeholder="E-mail">
        <textarea name="" id="" placeholder="message"></textarea>
        <button>
            <Sendicon></Sendicon>
        </button>
    </div>
</template>
<script>
import Sendicon from '@/components/Sendicon'
export default {
    components: {
        Sendicon
    }
}
</script>

<style scoped>
.contact {
    height: 500px;
    width: 390px;
    position: relative;
    box-sizing: border-box;
    padding: 10px;
}
button {
    border-radius: 50%;
    border: none;
    position: absolute;
    margin-top: -50px;
    background: none;
    outline: none;
    left: 50%;
    transform: translateX(-50%);
}

input {
    height: 40px;
    width: 100%;
    padding: 5px;
    font-size: 20px;

    box-sizing: inherit;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border: none;
    margin-bottom: 20px;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
}
textarea {
    font-size: 20px;
    padding: 5px;
    box-sizing: border-box;    
    border: none;
    border-bottom: 1px solid black;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 100%;
    min-height: 200px;
    border-left: 1px solid black;
    border-right: 1px solid black;
}
</style>

<template>
    <div class="main-header">
        <div class="suggestions">
            <span class="suggestion-count">6</span>
            <p>Suggestions</p>
        </div>
        <div class="sort-upvotes">
            <label for="myUpvotes">Sort by:</label>
            <input class="upvotes" id="myUpvotes" list="upvotes" value="Most Upvotes">
            <datalist id="upvotes">
                <option value="Most Upvotes"></option>
                <option value="Least Upvotes"></option>
                <option value="Most Comments"></option>
                <option value="Least Comments"></option>
            </datalist>
        </div>

        <button class="add-feedback__btn">
            + Add Feedback
        </button>
    </div>
</template>

<script>
    export default {
        name:'MainHeader'
    }
</script>

<style scoped>
    .main-header{
        background-color: #373F68;
        padding: 14px 24px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        margin-bottom: 24px;
    }
    .suggestions{
        display: flex;
        align-items: center;
        color: #fff;
        margin-right: 40px;
    }
    .suggestions::before{
        content: "";
        background: url('../../assets/Vector.png');
        width: 24px;
        height: 24px;
        margin-right: 16px;
    }
    .suggestion-count{
        margin-right: 10px;
    }
    .sort-upvotes{
        color: #fff;
    }
    p{
        margin: 0;
    }
    .upvotes{
        border: none;
        background-color: inherit;
    }
    input{
        color: #fff;
    }
    .add-feedback__btn{
        padding: 12px 25px;
        background-color: #AD1FEA;
        border: none;
        border-radius: 10px;
        margin-left: auto;
        color: #fff;
        cursor: pointer;
    }
    .add-feedback__btn:hover{
        background-color: #C75AF6;
    }
</style>
<template>
  <div class="email-popup">
    <div class="container">
      <form
        action="mailto:macho.cho98@gmail.com"
        type="post"
        enctype="text/plain"
        class="email-popup__form"
      >
        <div @click="$emit('hide-popup', isShowPopup)" class="email-popup__form-close">
          <i class="fas fa-times"></i>
        </div>
        <label for="subj">Theme:</label>
        <input type="text" id="subj" name="Subject" placeholder="please, type a theme" />

        <label for="body">Text:</label>
        <textarea id="body" name="Body" rows="5" colls="20" placeholder="please, type a feedback"></textarea>
        <div class="email-popup__form-btn-container">
          <a
            href="mailto:affiliates@chinesepod.com"
            class="email-popup__form-btn"
            @click="$emit('hide-popup', isShowPopup)"
          >Send Email</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmailPopup",
  data: () => ({
    isShowPopup: false
  })
};
</script>

<style lang="scss">
$strong-red: #e1001e;

.email-popup {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100vw;
  height: 100vh;

  .container {
    padding: 16px;
    background-color: #fff;
    border-radius: 12px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 300px;

    label {
      font-size: 14px;
      margin-bottom: 8px;
    }

    input,
    textarea {
      padding: 5px;
      border: 1px solid #dedede;
      border-radius: 3px;
    }

    input {
      margin-bottom: 16px;
    }

    textarea {
      margin-bottom: 36px;
      resize: none;
    }
  }

  &__form-close {
    display: flex;
    justify-content: flex-end;

    svg {
      cursor: pointer;
      path {
        fill: #ccc;
        transition: all 0.2s ease-in-out;

        &:hover {
          fill: #aaa;
        }
      }
    }
  }

  &__form-btn-container {
    display: flex;
    justify-content: center;
  }

  &__form-btn {
    border-radius: 8px;
    padding: 10px 20px;
    border: 1px solid $strong-red;
    background-color: $strong-red;
    color: #fff;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: $strong-red;
    }
  }
}
</style>
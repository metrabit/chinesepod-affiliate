<template>
  <div class="faq">
    <h2 class="faq__title faq__item">Affiliate</h2>
    <div class="faq__item">
      <i class="fa fa-info-circle" />
      What is it ?
    </div>
    <div class="faq__item">
      <i class="fa fa-user-plus" />
      Become an Affiliate
    </div>
  </div>
</template>

<script>
export default {
  name: "AffiliateQuestions"
};
</script>

<style lang="scss">
$text: #555;
$bg: #6a6a80;

.faq {
  display: flex;
  flex-direction: column;
  width: 260px;
  margin-right: 24px;

  svg path {
    fill: $text;
  }

  &__title {
    margin: 0;
    font-weight: 500;
    color: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    background-color: $bg;
  }

  &__item {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ddd;

    &:not(:first-child) {
      border-top: none;
    }

    &:not(:first-child) {
      color: $text;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background-color: #eee;
      }
    }
  }
}
</style>
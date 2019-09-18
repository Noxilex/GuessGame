<template>
  <Page>
    <ActionBar title="Detail">
        <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>
    <StackLayout class="test">
      <Label :text="foo" />
        <Button v-if="type == 'modal'" text="Close" @tap="$modal.close" />
    </StackLayout>
  </Page>
</template>

<script>
export default {
  props: ["foo", "type"]
};
</script>

<style>
.test {
    padding: 10px;
    text-align: center;
}
</style>
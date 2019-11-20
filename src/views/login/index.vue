<template>
  <div class="login">
    <!-- 导航栏 -->
    <van-nav-bar
      title="标题"
    />
    <!-- /导航栏 -->

    <!-- 登录表单 -->
    <ValidationObserver ref="loginForm">
      <van-cell-group>
        <!--
          name 提示的文本
          rules 验证规则
            required 必填项
            email
            max
            ....
            参考文档：https://logaretm.github.io/vee-validate/api/rules.html#alpha

          v-slot="{ errors }" 获取校验结果数据
            errors[0] 读取校验结果的失败信息
         -->
        <!-- <ValidationProvider name="手机号" rules="required|email|max:5" v-slot="{ errors }"> -->
        <ValidationProvider name="手机号" rules="required|phone" v-slot="{ errors }">
          <van-field
            v-model="user.mobile"
            required
            clearable
            label="手机号"
            placeholder="请输入手机号"
            :error-message="errors[0]"
          />
        </ValidationProvider>

        <ValidationProvider name="验证码" rules="required|max:6" v-slot="{ errors }">
          <van-field
            v-model="user.code"
            type="password"
            label="验证码"
            placeholder="请输入验证码"
            required
            :error-message="errors[0]"
          />
        </ValidationProvider>
      </van-cell-group>
    </ValidationObserver>
    <!-- /登录表单 -->

    <!-- 登录按钮 -->
    <div class="btn-wrap">
      <van-button class="btn" type="info" @click="onLogin">登录</van-button>
    </div>
    <!-- /登录按钮 -->
  </div>
</template>

<script>
import { login } from '@/api/user'
import { setItem } from '@/utils/storage'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '15555555555', // 手机号
        code: '246810' // 验证码
      }
    }
  },

  methods: {
    async onLogin () {
      // 表单验证
      const isValid = await this.$refs.loginForm.validate()

      // 如果验证失败，阻止表单提交
      if (!isValid) {
        return
      }

      // 验证通过，loading，请求
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '登录中'
      })

      try {
        // 请求提交表单数据
        const { data } = await login(this.user)

        console.log(data)

        // 如果 loading 后面有 success、fail 之类的提示，就不需要手动的关闭了
        // 因为 success、fail 会自动把 loading 也给关掉
        // toast.clear()

        // 登录成功，将 token 存储到 Vuex 容器中
        this.$store.commit('setUser', data.data)

        // 为了防止页面刷新数据丢失，我们需要把数据放到本地存储
        setItem('user', data.data)

        this.$toast.success('登录成功')

        // 跳转到登录页
        this.$router.push(this.$route.query.redirect || '/')
      } catch (err) { // 所有大于等于 400 的状态码都会进入 catch
        if (err.response && err.response.status === 400) {
          this.$toast.fail('登录失败，手机号或验证码错误')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  .btn-wrap {
    padding: 20px;
    .btn {
      width: 100%;
      background-color: #6db4fb;
      color: #fff;
    }
  }
}
</style>

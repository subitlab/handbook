---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

let bloggerSvg = 
`
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<path d="M510.65,216.124c0-12.614-10.226-22.839-22.84-22.839v-0.002h-22.96v0.002
	c-14.669,0.019-29.764-0.493-36.18-6.311c-9.068-8.383-10.433-23.436-13.174-43.793c-5.13-39.516-8.38-41.569-14.541-54.912
	C378.547,40.713,317.821,4.96,276.081,0H163.007C74.051,0,1.35,72.873,1.35,161.828v188.686C1.35,439.296,74.051,512,163.007,512
	h185.776c88.953,0,161.143-72.704,161.657-161.488C510.44,350.512,510.65,216.458,510.65,216.124z M165.06,132.233h89.636
	c17.106,0,30.964,13.858,30.964,30.792c0,16.937-13.856,30.964-30.964,30.964H165.06c-17.109,0-30.967-14.025-30.967-30.964
	C134.093,146.091,147.949,132.233,165.06,132.233z M347.243,378.911H165.06c-17.109,0-30.967-14.027-30.967-30.79
	c0-16.937,13.856-30.793,30.967-30.793h182.183c16.937,0,30.793,13.856,30.793,30.793
	C378.037,364.882,364.18,378.911,347.243,378.911z"/>
</svg>
`

const coreMembers = [
  {
    avatar: 'https://s2.loli.net/2023/11/04/yk597QDgp4icwJP.jpg',
    name: '地铁狂羊',
    title: '2021 SubIT 社长',
    links: [
      { icon: 'github', link: 'https://github.com/smallg0at' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/25414059?v=4',
    name: 'StevenKerman',
    title: '2022 SubIT 社长',
    links: [
      { icon: 'github', link: 'https://github.com/steven12138' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/73209424?v=4',
    name: 'HLXY-420',
    title: '2023 SubIT 社长',
    links: [
      { icon: 'github', link: 'https://github.com/HLXY-420' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/62581227?v=4',
    name: 'David-Zhang',
    title: '2023 SubIT 副社长',
    links: [
      { icon: 'github', link: 'https://github.com/David-Zhang-test' },
    ]
  },
];
const thanks =  [
  {
    avatar: 'https://avatars.githubusercontent.com/u/9105907?v=4',
    name: '孙喵喵',
    title: '启发了太多idea的普通语文教师',
    links: 
    [
      {
        icon: {
            svg: bloggerSvg
        }, 
        link: 'https://bdfzer.com'
      },
      { icon: 'github', link: 'https://github.com/gptv' }
    ]
  },
];
</script>
<style>
    .link{
        color: #0571d2;
        transition: all .25s ease-in-out;
    }
    .link:hover{
        color: #055ba7;
    }
</style>
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>我们的团队</template>
    <template #lead>Powered By <a href="https://subit.org.cn" target="__blank" class="link">SubIT</a>，排名不分先后</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>特别鸣谢</template>
    <template #lead>启发思考，提供材料，整理内容等</template>
    <template #members>
      <VPTeamMembers size="small" :members="thanks" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/zergslaw.png',
    name: 'Эдгар Сипки',
    title: 'Основатель',
    links: [
      { icon: 'github', link: 'https://github.com/zergslaw' },
    ]
  },
  {
    avatar: 'https://www.github.com/hound672.png',
    name: 'Василий Близнецов',
    title: 'Основатель',
    links: [
      { icon: 'github', link: 'https://github.com/hound672' },
    ]
  },
  {
    avatar: 'https://www.github.com/onokonem.png',
    name: 'Даниил Подольский',
    title: 'Основатель',
    links: [
      { icon: 'github', link: 'https://github.com/onokonem' },
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Наша команда
    </template>
    <template #lead>
      Основание и разработка EasyP осуществляются международной командой основателей, все члены которой представлены ниже.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
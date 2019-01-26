<template>
  <div class="leading-normal flex-col">
    <div class="py-8 font-bold bg-green-darker text-white mx-auto text-center">
      <h1 class="fond-bold text-white text-4xl">{{ title }}</h1>
      <time>{{ formatedUpdatedAt }}</time>
    </div>
    <div
      v-highlight
      class="mx-auto body w-full sm:w-full md:w-3/5 lg:w-1/2 xl:w-1/2 mx-auto my-8"
      v-html="body"/>
  </div>
</template>
<style>
.body {
  font-size: 21px;
  line-height: 1.7;
  overflow-wrap: break-word;
}

.body p {
  margin-bottom: 1.7em;
}

.body h2 {
  margin: 1em 0;
  border-bottom: solid 2px #613b1f;
}

.body h2:before {
  content: '# ';
}

.body h3 {
  border-bottom: solid 2px #613b1f;
  margin: 1em 0;
}

/* Tomorrow Night Theme */
/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */
/* Original theme - https://github.com/chriskempson/tomorrow-theme */
/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */
.tomorrow-comment,
pre .comment,
pre .title {
  color: #969896;
}

.tomorrow-red,
pre .variable,
pre .attribute,
pre .tag,
pre .regexp,
pre .ruby .constant,
pre .xml .tag .title,
pre .xml .pi,
pre .xml .doctype,
pre .html .doctype,
pre .css .id,
pre .css .class,
pre .css .pseudo {
  color: #cc6666;
}

.tomorrow-orange,
pre .number,
pre .preprocessor,
pre .built_in,
pre .literal,
pre .params,
pre .constant {
  color: #de935f;
}

.tomorrow-yellow,
pre .class,
pre .ruby .class .title,
pre .css .rules .attribute {
  color: #f0c674;
}

.tomorrow-green,
pre .string,
pre .value,
pre .inheritance,
pre .header,
pre .ruby .symbol,
pre .xml .cdata {
  color: #b5bd68;
}

.tomorrow-aqua,
pre .css .hexcolor {
  color: #8abeb7;
}

.tomorrow-blue,
pre .function,
pre .python .decorator,
pre .python .title,
pre .ruby .function .title,
pre .ruby .title .keyword,
pre .perl .sub,
pre .javascript .title,
pre .coffeescript .title {
  color: #81a2be;
}

.tomorrow-purple,
pre .keyword,
pre .javascript .function {
  color: #b294bb;
}

.hljs code {
  display: block;
  background: #1d1f21;
  color: #c5c8c6;
  font-family: Menlo, Monaco, Consolas, monospace;
  line-height: 1.5;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
<script lang="ts">
import { DateTime } from 'luxon'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    updatedAt: {
      type: String,
      default: ''
    }
  },
  computed: {
    formatedUpdatedAt() {
      return DateTime.fromSQL(this.updatedAt, {
        zone: 'utc'
      })
        .setZone('UTC+9')
        .toFormat('yyyy/MM/dd HH:mm')
    }
  }
}
</script>

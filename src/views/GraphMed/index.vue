<template>
  <!-- GraphMed 介绍页面 -->
  <div style="padding: 10px; padding-top: 0px">
    <span>
      <h2 style="text-align: center; font-weight: 700; font-size: 20px">
        R shiny tools: GraphMed
      </h2>
      <br />
      <!-- 介绍信息 -->
      <p>
        GraphMed is a web-based tool for medical data analysis and visualization
        based on R shiny, which aims to provide easy-to-use and practical data
        analysis and visualization services, reduce the cost of related skill
        learning, and enable researchers to focus on why (scientific questions)
        rather than how (skills learning), helping them process data more easily
        and quickly.
      </p>
      <br />
      <!-- Hiplot -->
      <p>
        Some of the tools have been uploaded to the
        <a
          href="https://hiplot.com.cn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hiplot
        </a>
        and have received good feedback and have been used more than 20000
        times. If you are confused about the use, you can leave a message on
        <a href="https://stu.chcmu.asia" target="_blank">
          our laboratory website
        </a>
        , or you can leave a message to me through Hiplot. If you have a shiny
        tool that you would like to place here or are interested, you can
        contact us via email bingmp@stu.cqmu.edu.cn.
      </p>
      <br />
    </span>
    <div style="display: flex">
      <span style="width: 50%">
        <img src="/images/graphmed/tools.jpg" alt="tools" style="width: 100%" />
      </span>

      <span style="width: 50%">
        <br />
        <div style="display: flex">
          <a href="https://github.com/bingmp" target="_blank">
            <h4>Github</h4>
          </a>
          &nbsp;| &nbsp;
          <a href="https://gitee.com/bingmp" target="_blank">
            <h4>Gitee</h4>
          </a>
        </div>
        <br />
        <p>
          For RNA-seq and Enrichment, this web may not run successfully due to
          network reasons, please refer to the instructions in Gitee (or Docker)
          and run it on your local computer. If you have any questions about
          using it, ask me on GitHub or Gitee!
        </p>
        <br />
        <h4>FAQ</h4>
        <ul>
          <li>
            Reference data: click "show data", or download the corresponding
            reference data of the respective tool;
          </li>
          <li>
            Upload data in csv/xlsx/xls. The CSV file is encoded in the format
            of "GB18030".
          </li>
          <li>Click "Analysis" or "Start drawing" to analyze.</li>
          <li>Adjust analysis or graphic parameters.</li>
          <li>
            The map does not need to download the reference data, and can
            directly click to modify the sample data after running.
          </li>
          <li>Updating......</li>
        </ul>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'GraphMed',
}
</script>

<style>
ul {
  list-style-type: disc;
  list-style-position: inside;
}
ol {
  list-style-type: decimal;
  list-style-position: inside;
}
span > p {
  text-indent: 2em;
}
</style>

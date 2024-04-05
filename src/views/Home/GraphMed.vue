<template>
  <div style="padding: 10px; padding-top: 0px">
    <span>
      <h2 style="text-align: center; font-weight: 700; font-size: 20px">
        R shiny tools: GraphMed
      </h2>
      <br />
      <p>
        GraphMed is a web-based tool for medical data analysis and visualization
        based on R shiny, which aims to provide easy-to-use and practical data
        analysis and visualization services, reduce the cost of related skill
        learning, and enable researchers to focus on why (scientific questions)
        rather than how (skills learning), helping them process data more easily
        and quickly.
      </p>
      <p>
        Some of the tools have been uploaded to the
        <a
          href="https://hiplot.com.cn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hiplot
        </a>
        and have received good feedback and have been used more than 10,000
        times. If you are confused about the use, you can leave a message on
        <a href="https://stu.chcmu.asia" target="_blank">
          our laboratory website
        </a>
        , or you can leave a message to me through Hiplot. If you have a shiny
        tool that you would like to place here or are interested, you can
        contact us via email 2020111042@stu.cqmu.edu.cn.
      </p>
      <br />
    </span>
    <div style="display: flex">
      <span style="width: 50%">
        <img
          src="https://chcmu.com.cn/wp-content/uploads/2024/03/tools.jpg"
          alt="tools"
          style="width: 100%"
        />
      </span>

      <span style="width: 50%">
        <br />
        <a href="https://gitee.com/bingmp/" target="_blank">
          <h4>Gitee</h4>
        </a>
        <br />
        <p>
          For RNA-seq and Enrichment, this web may not run successfully due to
          network reasons, please refer to the instructions in Gitee (or Docker)
          and run it on your local computer.
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
          <li>Other graphics, updating......</li>
        </ul>
      </span>
    </div>
    <div>
      <br />
      <p>
        GraphMed 是基于 R shiny 编写的一个医学数据分析及可视化的网页工具，
        旨在提供简便易用、实用性高的数据分析与可视化服务，降低相关技能学习成本，
        使得研究人员可将精力集中于“科学问题”而非“技能学习”，帮助其更加便捷、快速地处理数据。
      </p>
      <p>
        部分工具上传至 Hiplot
        平台（https://hiplot.com.cn），收到良好反馈，使用次数已过万。
        对于使用中存在的困惑，可在我们实验室网站留言，也可通过 Hiplot 给我留言。
        若有shiny 工具想布置在此处或感兴趣者，均可通过邮箱
        2020111042@stu.cqmu.edu.cn 联系。
      </p>
      <p>
        对于差异分析（RNA-seq）以及富集分析（Enrichment），
        由于网络原因，此网页可能无法成功运行， 可参考 Gitee
        中说明，用本地电脑运行。
      </p>
      <br />
      <br />
      <h4>FAQ</h4>
      <br />
      <p>1、参考参考数据：点击“show data”，或下载各自工具的对应参考数据；</p>
      <p>2、上传数据，格式为 csv/xlsx/xls。csv 文件编码格式为 “GB18030”。</p>
      <p>
        3、点击“Analysis”/“Start drawing”进行分析。。 4、调节分析或图形参数。
      </p>
      <p>5、地图可不用下载参考数据，直接点击运行后修改示例数据即可。</p>
      <p>6、其他图形，更新中......</p>
    </div>
  </div>
</template>

<script></script>

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

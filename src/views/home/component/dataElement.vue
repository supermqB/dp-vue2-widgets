<template>
  <div>
    <VueEcharts
      :option="defaultOption"
      style="width: 100%; height: 400px"></VueEcharts>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        defaultOption : {
          color: [
            "#0277BC",
            "#37B5D0",
            "#8473FF",
            "#417CFF",
            "#D8C435",
            "#029876",
            "#4DDF8A",
          ],
          legend: {
            orient: "vertical",
            top: 50,
            right: 0,
            itemGap: 15,
            itemHeight: 10,
            itemWidth: 10,
            icon: "circle",
            textStyle: {
              color: "white",
              padding: [0, 8],
            },
            itemStyle: {
              borderCap: "round",
            },
          },
          tooltip: {
            trigger: "item",
            backgroundColor: "rgba(6, 57, 146, 0.86)",
            borderColor: "#0091FF",
            textStyle: {
              color: "#fff",
            },
            formatter: ({ data: { name, value }, percent }) =>
              `${name} ${Number(value).toLocaleString()} 条`,
          },
          series: [
            {
              name: "Ringpie Chart",
              type: "pie",
              radius: [35, 80],
              clockwise: false,
              label: {
                alignTo: "edge",
                minMargin: 15,
                edgeDistance: 130,
                formatter: "{b}\n\n{d}%",
                color: "white",
              },
              labelLine: {
                length: 15,
                length2: 0,
                maxSurfaceAngle: 80,
              },
              labelLayout: function (params) {
                const chartWidth = container.value.offsetWidth;
                const isLeft =
                  params.labelRect.x <
                  (chartWidth * parseInt(maskPos.value.left)) / 100;
                const points = params.labelLinePoints;
                points[2][0] = isLeft
                  ? params.labelRect.x
                  : params.labelRect.x + params.labelRect.width;
                return {
                  labelLinePoints: points,
                };
              },
            },
          ]
        }
      }
    }
  }
</script>
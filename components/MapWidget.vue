<template>
  <el-card
    shadow="never"
    class="bg-transparent h-full"
    :body-style="{ padding: '0', border: '0', height: '100%' }"
  >
    <div class="flex flex-col h-full">
      <div ref="map" class="flex-1 w-full h-full"></div>
    </div>
  </el-card>
</template>

<script>
import 'leaflet/dist/leaflet.css'

export default {
  name: 'MapWidget',

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      map: null,
      markersLayer: null,
    }
  },

  computed: {
    items() {
      return this.data?.data || []
    },
  },

  mounted() {
    this.initMap()
  },

  methods: {
    initMap() {
      const L = this.$leaflet

      this.map = L.map(this.$refs.map).setView([-2.5, 118], 5)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(this.map)

      this.markersLayer = L.layerGroup().addTo(this.map)

      this.renderMarkers()
    },

    renderMarkers() {
      if (!this.map) return

      const L = this.$leaflet
      this.markersLayer.clearLayers()

      const bounds = []

      this.items.forEach((item) => {
        if (!item.lat || !item.lng) return

        const marker = L.circleMarker([item.lat, item.lng], {
          radius: Math.max(8, item.count * 2),
          fillColor: '#3B82F6',
          color: '#1E40AF',
          weight: 1,
          fillOpacity: 0.6,
        }).bindPopup(`<strong>${item.name}</strong><br/>Count: ${item.count}`)

        marker.addTo(this.markersLayer)
        bounds.push([item.lat, item.lng])
      })

      if (bounds.length) {
        this.map.fitBounds(bounds, { padding: [20, 20] })
      }
    },
  },

  beforeDestroy() {
    if (this.map) this.map.remove()
  },
}
</script>

<style>
.leaflet-container {
  height: 100%;
  width: 100%;
}
</style>

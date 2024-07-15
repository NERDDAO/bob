<script>
  export let label;
  export let value;
  export let isLoading;
  export let symbol;
</script>

<div class="stat place-items-center">
  <div class="stat-title">{label}:</div>
  <div class="stat-value">
    {isLoading ? "Loading..." : value.toFixed(3)} <span class="stat-desc">{symbol}</span>
  </div>
</div>

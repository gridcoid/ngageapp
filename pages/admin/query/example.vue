<template>
  <div class="p-6 max-w-4xl mx-auto space-y-6">
    <h1 class="text-3xl font-bold mb-4">How to Create a Query</h1>

    <!-- Introduction -->
    <p class="text-gray-700">
      Queries allow you to fetch and analyze data from your audience tables. You
      can define <strong>metrics</strong>, <strong>grouping</strong>,
      <strong>filters</strong>, <strong>joins</strong>,
      <strong>sorting</strong>, and <strong>limit</strong> for flexible data
      retrieval.
    </p>

    <!-- Metrics -->
    <div class="bg-white p-6 rounded shadow space-y-2">
      <h2 class="text-xl font-semibold">1. Metrics</h2>
      <p class="text-gray-700">
        Metrics define the calculation you want to perform on a field, e.g.,
        count, sum, avg. Example:
      </p>
      <pre class="bg-gray-100 p-4 rounded text-sm overflow-auto">
[
  { "field": "*", "op": "count", "as": "total" },
  { "field": "amount", "op": "sum", "as": "total_amount" }
]
      </pre>
    </div>

    <!-- Group By -->
    <div class="bg-white p-6 rounded shadow space-y-2">
      <h2 class="text-xl font-semibold">2. Group By</h2>
      <p class="text-gray-700">
        Group your results by one or more fields to get aggregated data per
        group. Example:
      </p>
      <pre class="bg-gray-100 p-4 rounded text-sm overflow-auto">
["province", "gender"]
      </pre>
    </div>

    <!-- Filters -->
    <div class="bg-white p-6 rounded shadow space-y-2">
      <h2 class="text-xl font-semibold">3. Filters</h2>
      <p class="text-gray-700">
        Filters narrow down the rows to include in the result. You can combine
        filters with <strong>and/or</strong> logic. Examples:
      </p>

      <p class="font-medium">Object with and/or:</p>
      <pre class="bg-gray-100 p-4 rounded text-sm overflow-auto">
{
  "and": [
    { "field": "isActive", "op": "eq", "value": true },
    {
      "or": [
        { "field": "province", "op": "eq", "value": "Jakarta" },
        { "field": "province", "op": "eq", "value": "Bali" }
      ]
    }
  ]
}
  </pre
      >

      <p class="font-medium">Array of simple filters:</p>
      <pre class="bg-gray-100 p-4 rounded text-sm overflow-auto">
[
  { "field": "isActive", "op": "eq", "value": true },
  { "field": "province", "op": "eq", "value": "Jakarta" }
]
  </pre
      >
    </div>

    <!-- Joins -->
    <div class="bg-white p-6 rounded shadow space-y-2">
      <h2 class="text-xl font-semibold">4. Joins</h2>
      <p class="text-gray-700">
        Join other tables to enrich your query. Specify join type, local field,
        and foreign field. Example:
      </p>
      <pre class="bg-gray-100 p-4 rounded text-sm overflow-auto">
[
  {
    "table": "Segments",
    "type": "left",
    "localField": "segmentId",
    "foreignField": "id"
  }
]
      </pre>
    </div>

    <!-- Sort -->
    <div class="bg-white p-6 rounded shadow space-y-2">
      <h2 class="text-xl font-semibold">5. Sort</h2>
      <p class="text-gray-700">
        Sort the results by one or more fields. Example:
      </p>
      <pre class="bg-gray-100 p-4 rounded text-sm overflow-auto">
[
  { "field": "createdAt", "dir": "desc" },
  { "field": "province", "dir": "asc" }
]
      </pre>
    </div>

    <!-- Limit -->
    <div class="bg-white p-6 rounded shadow space-y-2">
      <h2 class="text-xl font-semibold">6. Limit</h2>
      <p class="text-gray-700">
        Limit the number of results returned. Maximum allowed is 5000. Example:
      </p>
      <pre class="bg-gray-100 p-4 rounded text-sm overflow-auto">
100
      </pre>
    </div>

    <!-- Summary -->
    <div class="bg-blue-50 p-6 rounded shadow space-y-2">
      <h2 class="text-xl font-semibold">Example Full Query Definition</h2>
      <pre class="bg-gray-100 p-4 rounded text-sm overflow-auto">
{
  "source": "audienceContacts",
  "metrics": [
    { "field": "*", "op": "count", "as": "total" }
  ],
  "groupBy": ["province"],
  "filters": { "and": [ { "field": "isActive", "op": "eq", "value": true } ] },
  "joins": [
    { "table": "Segments", "type": "left", "localField": "segmentId", "foreignField": "id" }
  ],
  "sort": [{ "field": "createdAt", "dir": "desc" }],
  "limit": 100
}
      </pre>
    </div>

    <!-- Vocabulary -->
    <div class="bg-white p-6 rounded shadow space-y-2 mt-6">
      <h2 class="text-xl font-semibold">Vocabulary / Glossary</h2>
      <p class="text-gray-700">
        Definitions of key terms used in metrics, filters, and query
        configuration.
      </p>

      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li>
          <strong>field</strong>: The column or property name from the source
          table.
        </li>
        <li>
          <strong>op</strong>: Operator used to compare values in a filter.
        </li>
        <li><strong>eq</strong>: Equal to.</li>
        <li><strong>neq</strong>: Not equal to.</li>
        <li><strong>gt</strong>: Greater than.</li>
        <li><strong>gte</strong>: Greater than or equal to.</li>
        <li><strong>lt</strong>: Less than.</li>
        <li><strong>lte</strong>: Less than or equal to.</li>
        <li><strong>in</strong>: Value is in an array of options.</li>
        <li><strong>not_in</strong>: Value is not in an array of options.</li>
        <li><strong>like</strong>: Partial match (similar to SQL LIKE).</li>
        <li>
          <strong>between</strong>: Value is between two values (inclusive).
        </li>
        <li>
          <strong>metrics</strong>: Aggregations such as count, sum, avg, min,
          max.
        </li>
        <li><strong>groupBy</strong>: Columns to group results by.</li>
        <li><strong>joins</strong>: Relationships to join other tables.</li>
        <li>
          <strong>sort</strong>: Order of results, ascending (<em>asc</em>) or
          descending (<em>desc</em>).
        </li>
        <li><strong>limit</strong>: Maximum number of rows to return.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QueryGuidePage',
}
</script>

<style scoped>
pre {
  white-space: pre-wrap;
}
</style>

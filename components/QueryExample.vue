<template>
  <div>
    <!-- Metrics -->
    <div class="bg-white p-6 rounded shadow space-y-2 mb-6">
      <h2 class="text-xl font-semibold">Metrics</h2>
      <p class="text-gray-700">
        Metrics define the calculation you want to perform on a field, e.g.,
        count, sum, avg. Example:
      </p>
      <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  {
    "field": "*",
    "op": "count",
    "as": "total"
  },
  {
    "field": "amount",
    "op": "sum",
    "as": "total_amount"
  }
]
      </pre>
    </div>

    <!-- Joins -->
    <div class="bg-white p-6 rounded shadow space-y-2 mb-6">
      <h2 class="text-xl font-semibold">Joins</h2>
      <p class="text-gray-700">
        Join other tables to enrich your query. Specify join type, local field,
        and foreign field. Example:
      </p>
      <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
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

    <!-- Filters -->
    <div class="bg-white p-6 rounded shadow space-y-2 mb-6">
      <h2 class="text-xl font-semibold">Filters</h2>
      <p class="text-gray-700">
        Filters narrow down the rows to include in the result. You can combine
        filters with <strong>and/or</strong> logic. Examples:
      </p>

      <p class="font-medium">Object with and/or:</p>
      <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
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
      <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  {
    "field": "isActive",
    "op": "eq",
    "value": true
  },
  {
    "field": "province",
    "op": "eq",
    "value": "Jakarta"
  }
]
  </pre
      >
    </div>

    <!-- Group By -->
    <div class="bg-white p-6 rounded shadow space-y-2 mb-6">
      <h2 class="text-xl font-semibold">Group By</h2>
      <p class="text-gray-700">
        Group your results by one or more fields to get aggregated data per
        group. Example:
      </p>
      <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  "province",
  "gender"
]
      </pre>
    </div>

    <!-- Sort -->
    <div class="bg-white p-6 rounded shadow space-y-2 mb-6">
      <h2 class="text-xl font-semibold">Sort</h2>
      <p class="text-gray-700">
        Sort the results by one or more fields. Example:
      </p>
      <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  {
    "field": "createdAt",
    "dir": "desc"
  },
  {
    "field": "province",
    "dir": "asc"
  }
]
      </pre>
    </div>

    <!-- Limit -->
    <div class="bg-white p-6 rounded shadow space-y-2 mb-6">
      <h2 class="text-xl font-semibold">Limit</h2>
      <p class="text-gray-700">
        Limit the number of results returned. Maximum allowed is 5000. Example:
      </p>
      <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
100
      </pre>
    </div>

    <!-- Database -->
    <div class="bg-white p-6 rounded shadow space-y-2 mb-6">
      <h2 class="text-xl font-semibold">Database</h2>

      <p class="text-gray-700">
        Below is the list of database tables, including their fields and default
        values (when available).
      </p>

      <!-- AudienceContacts -->
      <div class="space-y-2">
        <h3 class="text-md font-semibold">AudienceContacts</h3>

        <p class="text-gray-700 font-medium">fields:</p>
        <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  "id",
  "audienceId",
  "typeId",
  "value",
  "label",
  "createdAt",
  "updatedAt",
  "deletedAt"
]
    </pre
        >
      </div>

      <!-- AudienceSegments -->
      <div class="space-y-2">
        <h3 class="text-md font-semibold">AudienceSegments</h3>

        <p class="text-gray-700 font-medium">fields:</p>
        <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  "id",
  "audienceId",
  "segmentId"
]
    </pre
        >
      </div>

      <!-- Audiences -->
      <div class="space-y-2">
        <h3 class="text-md font-semibold">Audiences</h3>

        <p class="text-gray-700 font-medium">fields:</p>
        <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  "id",
  "name",
  "dateOfBirth",
  "yearOfBirth",
  "genderId",
  "religionId",
  "orgId",
  "provinceCode",
  "regencyCode",
  "districtCode",
  "villageCode",
  "address",
  "additionalInfo",
  "createdAt",
  "updatedAt",
  "deletedAt"
]
    </pre
        >
      </div>

      <!-- ContactTypes -->
      <div class="space-y-2">
        <h3 class="text-md font-semibold">ContactTypes</h3>

        <p class="text-gray-700 font-medium">fields:</p>
        <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  "id",
  "name"
]
  </pre
        >

        <p class="text-gray-700 font-medium">default values:</p>
        <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  { "id": 1, "name": "email" },
  { "id": 2, "name": "phone" }
]
  </pre
        >
      </div>

      <!-- Districts -->
      <div class="space-y-2">
        <h3 class="text-md font-semibold">Districts</h3>

        <p class="text-gray-700 font-medium">fields:</p>
        <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  "id",
  "code",
  "regencyCode",
  "name",
  "lat",
  "lng"
]
  </pre
        >
      </div>

      <!-- Genders -->
      <div class="space-y-2">
        <h3 class="text-md font-semibold">Genders</h3>

        <p class="text-gray-700 font-medium">fields:</p>
        <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  "id",
  "name"
]
  </pre
        >

        <p class="text-gray-700 font-medium">default values:</p>
        <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  { "id": 1, "name": "Laki-laki" },
  { "id": 2, "name": "Perempuan" }
]
  </pre
        >
      </div>

      <!-- Provinces -->
      <div class="space-y-2">
        <h3 class="text-md font-semibold">Provinces</h3>

        <p class="text-gray-700 font-medium">fields:</p>
        <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  "id",
  "code",
  "name",
  "lat",
  "lng"
]
  </pre
        >
      </div>

      <!-- Regencies -->
      <div class="space-y-2">
        <h3 class="text-md font-semibold">Regencies</h3>

        <p class="text-gray-700 font-medium">fields:</p>
        <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  "id",
  "code",
  "provinceCode",
  "name",
  "lat",
  "lng"
]
  </pre
        >
      </div>

      <!-- Religions -->
      <div class="space-y-2">
        <h3 class="text-md font-semibold">Religions</h3>

        <p class="text-gray-700 font-medium">fields:</p>
        <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  "id",
  "name"
]
  </pre
        >

        <p class="text-gray-700 font-medium">default values:</p>
        <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  { "id": 1, "name": "Islam" },
  { "id": 3, "name": "Kristen Katolik" },
  { "id": 2, "name": "Kristen Protestan" },
  { "id": 4, "name": "Hindu" },
  { "id": 5, "name": "Buddha" },
  { "id": 6, "name": "Konghucu" },
  { "id": 7, "name": "Lainnya" }
]
  </pre
        >
      </div>

      <!-- Segments -->
      <div class="space-y-2">
        <h3 class="text-md font-semibold">Segments</h3>

        <p class="text-gray-700 font-medium">fields:</p>
        <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  "id",
  "uuid",
  "name",
  "description",
  "orgId",
  "createdAt",
  "updatedAt",
  "deletedAt",
  "createdBy"
]
  </pre
        >
      </div>

      <!-- Villages -->
      <div class="space-y-2">
        <h3 class="text-md font-semibold">Villages</h3>

        <p class="text-gray-700 font-medium">fields:</p>
        <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
[
  "id",
  "code",
  "districtCode",
  "name",
  "lat",
  "lng",
  "postalCode"
]
  </pre
        >
      </div>
    </div>

    <!-- Glossary -->
    <div class="bg-white p-6 rounded shadow space-y-2 mb-6">
      <h2 class="text-xl font-semibold">Glossary</h2>
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

    <!-- Summary -->
    <div class="bg-white p-6 rounded shadow space-y-2 mb-6">
      <h2 class="text-xl font-semibold">Example Full Query Definition</h2>
      <pre class="bg-gray-900 text-green-100 p-3 text-sm overflow-x-auto">
{
  "source": "AudienceContacts",
  "metrics": [
    {
      "field": "*",
      "op": "count",
      "as": "total"
    }
  ],
  "groupBy": ["province"],
  "filters": {
    "and": [
      {
        "field": "isActive",
        "op": "eq",
        "value": true
      }
    ]
  },
  "joins": [
    {
      "table": "Segments",
      "type": "left",
      "localField": "segmentId",
      "foreignField": "id"
    }
  ],
  "sort": [
    {
      "field": "createdAt",
      "dir": "desc"
    }
  ],
  "limit": 100
}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QueryExample',
}
</script>

<style scoped>
pre {
  white-space: pre-wrap;
}
</style>

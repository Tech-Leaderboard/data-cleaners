[
  {
    "op": "core/text-transform",
    "description": "Text transform on cells in column inventor_name_first using expression value.trim()",
    "engineConfig": {
      "mode": "row-based",
      "facets": [
        {
          "mode": "text",
          "caseSensitive": false,
          "query": "",
          "name": "inventor_name_middle",
          "type": "text",
          "columnName": "inventor_name_middle"
        }
      ]
    },
    "columnName": "inventor_name_first",
    "expression": "value.trim()",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10
  },
  {
    "op": "core/text-transform",
    "description": "Text transform on cells in column inventor_name_middle using expression value.trim()",
    "engineConfig": {
      "mode": "row-based",
      "facets": [
        {
          "mode": "text",
          "caseSensitive": false,
          "query": "",
          "name": "inventor_name_middle",
          "type": "text",
          "columnName": "inventor_name_middle"
        }
      ]
    },
    "columnName": "inventor_name_middle",
    "expression": "value.trim()",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10
  },
  {
    "op": "core/text-transform",
    "description": "Text transform on cells in column inventor_name_middle using expression value.toLowercase()",
    "engineConfig": {
      "mode": "row-based",
      "facets": [
        {
          "mode": "text",
          "caseSensitive": false,
          "query": "",
          "name": "inventor_name_middle",
          "type": "text",
          "columnName": "inventor_name_middle"
        }
      ]
    },
    "columnName": "inventor_name_middle",
    "expression": "value.toLowercase()",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10
  },
  {
    "op": "core/text-transform",
    "description": "Text transform on cells in column inventor_name_first using expression value.toLowercase()",
    "engineConfig": {
      "mode": "row-based",
      "facets": [
        {
          "mode": "text",
          "caseSensitive": false,
          "query": "",
          "name": "inventor_name_middle",
          "type": "text",
          "columnName": "inventor_name_middle"
        }
      ]
    },
    "columnName": "inventor_name_first",
    "expression": "value.toLowercase()",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10
  },
  {
    "op": "core/text-transform",
    "description": "Text transform on cells in column inventor_name_last using expression value.toLowercase()",
    "engineConfig": {
      "mode": "row-based",
      "facets": [
        {
          "mode": "text",
          "caseSensitive": false,
          "query": "",
          "name": "inventor_name_middle",
          "type": "text",
          "columnName": "inventor_name_middle"
        }
      ]
    },
    "columnName": "inventor_name_last",
    "expression": "value.toLowercase()",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10
  },
  {
    "op": "core/text-transform",
    "description": "Text transform on cells in column inventor_name_middle using expression grel:replace(value, '.','')",
    "engineConfig": {
      "mode": "row-based",
      "facets": [
        {
          "mode": "text",
          "caseSensitive": false,
          "query": "",
          "name": "inventor_name_middle",
          "type": "text",
          "columnName": "inventor_name_middle"
        }
      ]
    },
    "columnName": "inventor_name_middle",
    "expression": "grel:replace(value, '.','')",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10
  },
  {
    "op": "core/text-transform",
    "description": "Text transform on cells in column inventor_name_first using expression grel:replace(value, '.','')",
    "engineConfig": {
      "mode": "row-based",
      "facets": [
        {
          "mode": "text",
          "caseSensitive": false,
          "query": "",
          "name": "inventor_name_first",
          "type": "text",
          "columnName": "inventor_name_first"
        }
      ]
    },
    "columnName": "inventor_name_first",
    "expression": "grel:replace(value, '.','')",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10
  },
  {
    "op": "core/text-transform",
    "description": "Text transform on cells in column inventor_name_last using expression grel:replace(value, '.','')",
    "engineConfig": {
      "mode": "row-based",
      "facets": [
        {
          "mode": "text",
          "caseSensitive": false,
          "query": "",
          "name": "inventor_name_last",
          "type": "text",
          "columnName": "inventor_name_last"
        }
      ]
    },
    "columnName": "inventor_name_last",
    "expression": "grel:replace(value, '.','')",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10
  },
  {
    "op": "core/text-transform",
    "description": "Text transform on cells in column inventor_name_first using expression grel:replace(value, '\\'','')",
    "engineConfig": {
      "mode": "row-based",
      "facets": [
        {
          "mode": "text",
          "caseSensitive": false,
          "query": "",
          "name": "inventor_name_middle",
          "type": "text",
          "columnName": "inventor_name_middle"
        },
        {
          "mode": "text",
          "caseSensitive": false,
          "query": "'",
          "name": "inventor_name_first",
          "type": "text",
          "columnName": "inventor_name_first"
        }
      ]
    },
    "columnName": "inventor_name_first",
    "expression": "grel:replace(value, '\\'','')",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10
  },
  {
    "op": "core/text-transform",
    "description": "Text transform on cells in column inventor_name_middle using expression grel:replace(value, '\\'','')",
    "engineConfig": {
      "mode": "row-based",
      "facets": [
        {
          "mode": "text",
          "caseSensitive": false,
          "query": "",
          "name": "inventor_name_middle",
          "type": "text",
          "columnName": "inventor_name_middle"
        },
        {
          "mode": "text",
          "caseSensitive": false,
          "query": "",
          "name": "inventor_name_first",
          "type": "text",
          "columnName": "inventor_name_first"
        }
      ]
    },
    "columnName": "inventor_name_middle",
    "expression": "grel:replace(value, '\\'','')",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10
  },
  {
    "op": "core/text-transform",
    "description": "Text transform on cells in column inventor_name_last using expression grel:replace(value, '\\'','')",
    "engineConfig": {
      "mode": "row-based",
      "facets": [
        {
          "mode": "text",
          "caseSensitive": false,
          "query": "",
          "name": "inventor_name_middle",
          "type": "text",
          "columnName": "inventor_name_middle"
        },
        {
          "mode": "text",
          "caseSensitive": false,
          "query": "",
          "name": "inventor_name_first",
          "type": "text",
          "columnName": "inventor_name_first"
        }
      ]
    },
    "columnName": "inventor_name_last",
    "expression": "grel:replace(value, '\\'','')",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10
  },
  {
    "op": "core/text-transform",
    "description": "Text transform on cells in column inventor_name_last using expression grel:replace(value, '\\'','')",
    "engineConfig": {
      "mode": "row-based",
      "facets": [
        {
          "mode": "text",
          "caseSensitive": false,
          "query": "",
          "name": "inventor_name_middle",
          "type": "text",
          "columnName": "inventor_name_middle"
        },
        {
          "mode": "text",
          "caseSensitive": false,
          "query": "",
          "name": "inventor_name_first",
          "type": "text",
          "columnName": "inventor_name_first"
        }
      ]
    },
    "columnName": "inventor_name_last",
    "expression": "grel:replace(value, '\\'','')",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10
  }
]

//papi/backend/internal/api/handlers.go:
package api

import (
    "encoding/json"
    "net/http"
)

func HelloHandler(w http.ResponseWriter, r *http.Request) {
    response := map[string]string{"message": "Hello from PAPI!"}
    json.NewEncoder(w).Encode(response)
}
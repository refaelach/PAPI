//papi/backend/cmd/server/main.go:
package main

import (
    "log"
    "net/http"

    "github.com/refaelach/PAPI/internal/api"
)

func main() {
    http.HandleFunc("/hello", api.HelloHandler)
    log.Println("Server starting on :8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.New()

	// Middleware: CORS & Logging & Handle Exception
	router.Use(cors.Default())

	router.Static("/assets", "./assets")
	router.LoadHTMLGlob("./*.html")

	router.GET("", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index2.html", nil)
	})

	router.GET("1", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", nil)
	})

	// Run service at set port
	if err := router.Run(":13023"); err != nil {
		panic(err)
	}
}

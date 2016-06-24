#lang racket

(require web-server/servlet
         web-server/servlet-env
         web-server/templates)


(define root (current-directory))

(define (expenses-servlet req)
  (response/full
   200                 ; response code
   #"OK"               ; response message
   (current-seconds)   ; timestamp
   TEXT/HTML-MIME-TYPE ; MIME type for content
   '()                 ; additional headers

   (list (string->bytes/utf-8 (include-template "index.html")))))

; start serving:
(serve/servlet expenses-servlet
               #:servlet-path "/")
               ;#:extra-files-paths (list (build-path "frontend/") ))
               ;#:extra-files-paths (list (build-path root)))

FROM nginx:stable
COPY /styleguide /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

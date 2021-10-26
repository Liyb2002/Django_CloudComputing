From python:3.9
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY requirement.txt/app/requirements.txt
RUN pip install -4 requirements.txt
COPY ./app

CMD python manage.py runserver 
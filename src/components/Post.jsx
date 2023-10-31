import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';

export function Post({ author, content, publishedAt, id }) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }
  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }
  function handleNewCommentInvalid() {
    // setCustomValidity é um método HTML de inputs que nos permite colocar um texto de validação personalizado.
    event.target.setCustomValidity('Este campo é obrigatório.')
  }

  function deleteComment(commentToDelete) {
    // Imutabilidade -> As variáveis não sofrem mutação, nós criamos um novo valor para estas.
    // (Um novo espaço em memória)
    const filteredCommentsList = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(filteredCommentsList);
  }

  const formattedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });
  const relativeDate = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="Foto do autor do post." />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={formattedDate} dateTime={publishedAt.toISOString()}>
          {relativeDate}
        </time>
      </header>

      <div className={styles.content}>
        { content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{ line.content }</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href={line.content} target='_blank'>{ line.content }</a></p>
          }
        }) }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário!</strong>
        <textarea
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button 
            type="submit" 
            disabled={isNewCommentEmpty}
          >
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
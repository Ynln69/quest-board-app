import { useState, useEffect } from 'react';

import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/MainDashboard/MainDashboard';
import { ContainerDashboard } from './Dashboard.styled';

import { selectBoards } from 'redux/boards/boardsSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { editBoard } from 'redux/boards/boardOperations';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { boardName } = useParams();
  const boards = useSelector(selectBoards);
  const board = boards.filter(board => board.title === boardName)[0];
  const [cardData, setCardData] = useState(
    board !== undefined ? board.boardsData : null
  );
  const [editFlag, setEditFlag] = useState(false);

  useEffect(() => {
    const selectedBoard = boards.find(board => board.title === boardName);
    if (selectedBoard) {
      setCardData(selectedBoard.boardsData);
    }
  }, [boardName, boards]);

  useEffect(() => {
    if (editFlag) {
      const newBoard = {
        ...board,
        boardsData: cardData,
      };

      dispatch(editBoard({ newBoard, id: newBoard._id }));
    }
  }, [cardData, editFlag, board, dispatch]);

  return (
    <ContainerDashboard>
      {board !== undefined && (
        <>
          <HeaderDashboard boardName={board.title} />
          <MainDashboard
            cardData={cardData}
            setCardData={setCardData}
            setEditFlag={setEditFlag}
          />
        </>
      )}
    </ContainerDashboard>
  );
};
